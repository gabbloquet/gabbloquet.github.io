import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import type { CSSProperties } from "react";

// ---------- types ----------
type Match = [number, string, string, string, string, string];
type Score = [number, number];
type Joueur = "gabin" | "lea"; // valeurs contractuelles avec la colonne `player` en DB
type Brouillon = [string | number, string | number];

interface Stat {
  pts: number;
  n0: number;
  n1: number;
  n2: number;
  n3: number;
  joues: number;
}

interface EtatPartage {
  pronos: Record<Joueur, Record<number, Score>>;
  resultats: Record<number, Score>;
}

interface GroupeJour {
  cle: string;
  libelle: string;
  matchs: Match[];
  passe: boolean;
  lointain: boolean;
}

const MATCHS: Match[] = [[1,"2026-06-11T19:00Z","Mexique","Afrique du Sud","Gr. A","Mexico City"],[2,"2026-06-12T02:00Z","Corée du Sud","Tchéquie","Gr. A","Guadalajara"],[3,"2026-06-18T16:00Z","Tchéquie","Afrique du Sud","Gr. A","Atlanta"],[4,"2026-06-19T01:00Z","Mexique","Corée du Sud","Gr. A","Guadalajara"],[5,"2026-06-25T01:00Z","Tchéquie","Mexique","Gr. A","Mexico City"],[6,"2026-06-25T01:00Z","Afrique du Sud","Corée du Sud","Gr. A","Monterrey"],[7,"2026-06-12T19:00Z","Canada","Bosnie-Herz.","Gr. B","Toronto"],[8,"2026-06-13T19:00Z","Qatar","Suisse","Gr. B","San Francisco Bay Area"],[9,"2026-06-18T19:00Z","Suisse","Bosnie-Herz.","Gr. B","Los Angeles"],[10,"2026-06-18T22:00Z","Canada","Qatar","Gr. B","Vancouver"],[11,"2026-06-24T19:00Z","Suisse","Canada","Gr. B","Vancouver"],[12,"2026-06-24T19:00Z","Bosnie-Herz.","Qatar","Gr. B","Seattle"],[13,"2026-06-13T22:00Z","Brésil","Maroc","Gr. C","New York/New Jersey"],[14,"2026-06-14T01:00Z","Haïti","Écosse","Gr. C","Boston"],[15,"2026-06-19T22:00Z","Écosse","Maroc","Gr. C","Boston"],[16,"2026-06-20T00:30Z","Brésil","Haïti","Gr. C","Philadelphia"],[17,"2026-06-24T22:00Z","Écosse","Brésil","Gr. C","Miami"],[18,"2026-06-24T22:00Z","Maroc","Haïti","Gr. C","Atlanta"],[19,"2026-06-13T01:00Z","États-Unis","Paraguay","Gr. D","Los Angeles"],[20,"2026-06-14T04:00Z","Australie","Turquie","Gr. D","Vancouver"],[21,"2026-06-19T19:00Z","États-Unis","Australie","Gr. D","Seattle"],[22,"2026-06-20T03:00Z","Turquie","Paraguay","Gr. D","San Francisco Bay Area"],[23,"2026-06-26T02:00Z","Turquie","États-Unis","Gr. D","Los Angeles"],[24,"2026-06-26T02:00Z","Paraguay","Australie","Gr. D","San Francisco Bay Area"],[25,"2026-06-14T17:00Z","Allemagne","Curaçao","Gr. E","Houston"],[26,"2026-06-14T23:00Z","Côte d'Ivoire","Équateur","Gr. E","Philadelphia"],[27,"2026-06-20T20:00Z","Allemagne","Côte d'Ivoire","Gr. E","Toronto"],[28,"2026-06-21T00:00Z","Équateur","Curaçao","Gr. E","Kansas City"],[29,"2026-06-25T20:00Z","Curaçao","Côte d'Ivoire","Gr. E","Philadelphia"],[30,"2026-06-25T20:00Z","Équateur","Allemagne","Gr. E","New York/New Jersey"],[31,"2026-06-14T20:00Z","Pays-Bas","Japon","Gr. F","Dallas"],[32,"2026-06-15T02:00Z","Suède","Tunisie","Gr. F","Monterrey"],[33,"2026-06-20T17:00Z","Pays-Bas","Suède","Gr. F","Houston"],[34,"2026-06-21T04:00Z","Tunisie","Japon","Gr. F","Monterrey"],[35,"2026-06-25T23:00Z","Japon","Suède","Gr. F","Dallas"],[36,"2026-06-25T23:00Z","Tunisie","Pays-Bas","Gr. F","Kansas City"],[37,"2026-06-15T19:00Z","Belgique","Égypte","Gr. G","Seattle"],[38,"2026-06-16T01:00Z","Iran","Nlle-Zélande","Gr. G","Los Angeles"],[39,"2026-06-21T19:00Z","Belgique","Iran","Gr. G","Los Angeles"],[40,"2026-06-22T01:00Z","Nlle-Zélande","Égypte","Gr. G","Vancouver"],[41,"2026-06-27T03:00Z","Égypte","Iran","Gr. G","Seattle"],[42,"2026-06-27T03:00Z","Nlle-Zélande","Belgique","Gr. G","Vancouver"],[43,"2026-06-15T16:00Z","Espagne","Cap-Vert","Gr. H","Atlanta"],[44,"2026-06-15T22:00Z","Arabie saoudite","Uruguay","Gr. H","Miami"],[45,"2026-06-21T16:00Z","Espagne","Arabie saoudite","Gr. H","Atlanta"],[46,"2026-06-21T22:00Z","Uruguay","Cap-Vert","Gr. H","Miami"],[47,"2026-06-27T00:00Z","Cap-Vert","Arabie saoudite","Gr. H","Houston"],[48,"2026-06-27T00:00Z","Uruguay","Espagne","Gr. H","Guadalajara"],[49,"2026-06-16T19:00Z","France","Sénégal","Gr. I","New York/New Jersey"],[50,"2026-06-16T22:00Z","Irak","Norvège","Gr. I","Boston"],[51,"2026-06-22T21:00Z","France","Irak","Gr. I","Philadelphia"],[52,"2026-06-23T00:00Z","Norvège","Sénégal","Gr. I","New York/New Jersey"],[53,"2026-06-26T19:00Z","Norvège","France","Gr. I","Boston"],[54,"2026-06-26T19:00Z","Sénégal","Irak","Gr. I","Toronto"],[55,"2026-06-17T01:00Z","Argentine","Algérie","Gr. J","Kansas City"],[56,"2026-06-17T04:00Z","Autriche","Jordanie","Gr. J","San Francisco Bay Area"],[57,"2026-06-22T17:00Z","Argentine","Autriche","Gr. J","Dallas"],[58,"2026-06-23T03:00Z","Jordanie","Algérie","Gr. J","San Francisco Bay Area"],[59,"2026-06-28T02:00Z","Algérie","Autriche","Gr. J","Kansas City"],[60,"2026-06-28T02:00Z","Jordanie","Argentine","Gr. J","Dallas"],[61,"2026-06-17T17:00Z","Portugal","RD Congo","Gr. K","Houston"],[62,"2026-06-18T02:00Z","Ouzbékistan","Colombie","Gr. K","Mexico City"],[63,"2026-06-23T17:00Z","Portugal","Ouzbékistan","Gr. K","Houston"],[64,"2026-06-24T02:00Z","Colombie","RD Congo","Gr. K","Guadalajara"],[65,"2026-06-27T23:30Z","Colombie","Portugal","Gr. K","Miami"],[66,"2026-06-27T23:30Z","RD Congo","Ouzbékistan","Gr. K","Atlanta"],[67,"2026-06-17T20:00Z","Angleterre","Croatie","Gr. L","Dallas"],[68,"2026-06-17T23:00Z","Ghana","Panama","Gr. L","Toronto"],[69,"2026-06-23T20:00Z","Angleterre","Ghana","Gr. L","Boston"],[70,"2026-06-23T23:00Z","Panama","Croatie","Gr. L","Toronto"],[71,"2026-06-27T21:00Z","Panama","Angleterre","Gr. L","New York/New Jersey"],[72,"2026-06-27T21:00Z","Croatie","Ghana","Gr. L","Philadelphia"],[73,"2026-06-28T19:00Z","2e gr. A","2e gr. B","16es","Los Angeles"],[74,"2026-06-29T20:30Z","1er gr. E","3e (A/B/C/D/F)","16es","Boston"],[75,"2026-06-30T01:00Z","1er gr. F","2e gr. C","16es","Monterrey"],[76,"2026-06-29T17:00Z","1er gr. C","2e gr. F","16es","Houston"],[77,"2026-06-30T21:00Z","1er gr. I","3e (C/D/F/G/H)","16es","New York/New Jersey"],[78,"2026-06-30T17:00Z","2e gr. E","2e gr. I","16es","Dallas"],[79,"2026-07-01T01:00Z","1er gr. A","3e (C/E/F/H/I)","16es","Mexico City"],[80,"2026-07-01T16:00Z","1er gr. L","3e (E/H/I/J/K)","16es","Atlanta"],[81,"2026-07-02T00:00Z","1er gr. D","3e (B/E/F/I/J)","16es","San Francisco Bay Area"],[82,"2026-07-01T20:00Z","1er gr. G","3e (A/E/H/I/J)","16es","Seattle"],[83,"2026-07-02T23:00Z","2e gr. K","2e gr. L","16es","Toronto"],[84,"2026-07-02T19:00Z","1er gr. H","2e gr. J","16es","Los Angeles"],[85,"2026-07-03T03:00Z","1er gr. B","3e (E/F/G/I/J)","16es","Vancouver"],[86,"2026-07-03T22:00Z","1er gr. J","2e gr. H","16es","Miami"],[87,"2026-07-04T01:30Z","1er gr. K","3e (D/E/I/J/L)","16es","Kansas City"],[88,"2026-07-03T18:00Z","2e gr. D","2e gr. G","16es","Dallas"],[89,"2026-07-04T21:00Z","Vainq. M74","Vainq. M77","8es","Philadelphia"],[90,"2026-07-04T17:00Z","Vainq. M73","Vainq. M75","8es","Houston"],[91,"2026-07-05T20:00Z","Vainq. M76","Vainq. M78","8es","New York/New Jersey"],[92,"2026-07-06T00:00Z","Vainq. M79","Vainq. M80","8es","Mexico City"],[93,"2026-07-06T19:00Z","Vainq. M83","Vainq. M84","8es","Dallas"],[94,"2026-07-07T00:00Z","Vainq. M81","Vainq. M82","8es","Seattle"],[95,"2026-07-07T16:00Z","Vainq. M86","Vainq. M88","8es","Atlanta"],[96,"2026-07-07T20:00Z","Vainq. M85","Vainq. M87","8es","Vancouver"],[97,"2026-07-09T20:00Z","Vainq. M89","Vainq. M90","Quart","Boston"],[98,"2026-07-10T19:00Z","Vainq. M93","Vainq. M94","Quart","Los Angeles"],[99,"2026-07-11T21:00Z","Vainq. M91","Vainq. M92","Quart","Miami"],[100,"2026-07-12T01:00Z","Vainq. M95","Vainq. M96","Quart","Kansas City"],[101,"2026-07-14T19:00Z","Vainq. M97","Vainq. M98","Demie","Dallas"],[102,"2026-07-15T19:00Z","Vainq. M99","Vainq. M100","Demie","Atlanta"],[103,"2026-07-18T21:00Z","Perd. M101","Perd. M102","3e place","Miami"],[104,"2026-07-19T19:00Z","Vainq. M101","Vainq. M102","Finale","New York/New Jersey"]];
const RESULTATS_INITIAUX: Record<string, Score> = {"1":[2,0],"2":[2,1],"7":[1,1],"19":[4,1]};

const JOUEURS: Record<Joueur, { nom: string; couleur: string }> = {
  gabin: { nom: "Gabin", couleur: "#6FD3FF" },
  lea: { nom: "Léa", couleur: "#FF9FC6" },
};
const IDS_JOUEURS: Joueur[] = ["gabin", "lea"];
// Pronos déjà joués avant la création de l'app (matchs du 11 juin)
const PRONOS_INITIAUX: Record<Joueur, Record<number, Score>> = {
  gabin: { 1: [2, 0], 2: [1, 1], 7: [1, 1], 19: [2, 1] },
  lea: { 1: [3, 1], 2: [2, 1], 7: [1, 0], 19: [1, 1] },
};
const MATCH_TERMINE_MS = 105 * 60 * 1000; // coup d'envoi + 1h45 → le match est probablement terminé

// ---------- Supabase (REST + Edge Function) ----------
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// Clé "anon public" lue depuis .env (VITE_SUPABASE_ANON). Faite pour le
// navigateur : la sécurité repose sur les policies RLS.
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_ANON;
const ENTETES_SB = {
  "apikey": SUPABASE_ANON,
  "Authorization": "Bearer " + SUPABASE_ANON,
  "Content-Type": "application/json",
};
const URL_PREDICTIONS = SUPABASE_URL + "/rest/v1/predictions";

interface LignePrediction {
  match_id: number;
  player: string;
  s1: number | null;
  s2: number | null;
}

// Lit toute la table et reconstruit { pronos:{gabin,lea}, resultats }
async function chargerTout(): Promise<EtatPartage> {
  const r = await fetch(URL_PREDICTIONS + "?select=match_id,player,s1,s2", { headers: ENTETES_SB });
  if (!r.ok) throw new Error("read " + r.status);
  const lignes: LignePrediction[] = await r.json();
  const pronos: EtatPartage["pronos"] = { gabin: {}, lea: {} };
  const resultats: EtatPartage["resultats"] = {};
  for (const ligne of lignes) {
    if (ligne.s1 == null || ligne.s2 == null) continue;
    const score: Score = [ligne.s1, ligne.s2];
    if (ligne.player === "result") resultats[ligne.match_id] = score;
    else if (ligne.player === "gabin" || ligne.player === "lea") pronos[ligne.player][ligne.match_id] = score;
  }
  return { pronos, resultats };
}

// Upsert d'une ligne (prono ou résultat)
async function enregistrerLigne(match_id: number, player: string, s1: number, s2: number): Promise<boolean> {
  const r = await fetch(URL_PREDICTIONS + "?on_conflict=match_id,player", {
    method: "POST",
    headers: { ...ENTETES_SB, "Prefer": "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({ match_id, player, s1, s2, updated_at: new Date().toISOString() }),
  });
  return r.ok;
}

// Déclenche l'Edge Function sync-results (récup. des scores via API-Football)
async function appelerSync(): Promise<{ updated?: number }> {
  const r = await fetch(SUPABASE_URL + "/functions/v1/sync-results", {
    method: "POST", headers: ENTETES_SB, body: "{}",
  });
  if (!r.ok) throw new Error("sync " + r.status);
  return r.json();
}

// Amorçage initial : pousse pronos + résultats déjà connus s'ils manquent dans la base.
async function amorcerSiVide(): Promise<boolean> {
  const { pronos, resultats } = await chargerTout();
  const taches: Promise<boolean>[] = [];
  for (const j of IDS_JOUEURS) {
    for (const [id, prono] of Object.entries(PRONOS_INITIAUX[j])) {
      if (!pronos[j][Number(id)]) taches.push(enregistrerLigne(Number(id), j, prono[0], prono[1]));
    }
  }
  for (const [id, score] of Object.entries(RESULTATS_INITIAUX)) {
    if (!resultats[Number(id)]) taches.push(enregistrerLigne(Number(id), "result", score[0], score[1]));
  }
  if (taches.length) await Promise.all(taches);
  return taches.length > 0;
}

// ---------- utilitaires ----------
const horodatageMatch = (m: Match): number => new Date(m[1]).getTime();

function calculerPoints(prono: Score | undefined, resultat: Score | undefined): number | null {
  if (!prono || !resultat) return null;
  const [pa, pb] = prono, [ra, rb] = resultat;
  if (pa === ra && pb === rb) return 3;
  if (pa - pb === ra - rb) return 2;
  if (Math.sign(pa - pb) === Math.sign(ra - rb)) return 1;
  return 0;
}
const LIBELLE_PTS: Record<number, string> = { 3: "Exact +3", 2: "Bon écart +2", 1: "Vainqueur +1", 0: "+0" };

const formatHeure = (ms: number): string =>
  new Date(ms).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" });
const formatJour = (ms: number): string =>
  new Date(ms).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", timeZone: "Europe/Paris" });
const cleJour = (ms: number): string =>
  new Date(ms).toLocaleDateString("fr-CA", { timeZone: "Europe/Paris" }); // YYYY-MM-DD heure de Paris

function scoreValide(v: string | number): boolean {
  const s = String(v).trim();
  if (s === "") return false;
  const n = Number(s);
  return Number.isInteger(n) && n >= 0 && n <= 30;
}

const styleCouleur = (couleur: string): CSSProperties => ({ ["--pc"]: couleur } as CSSProperties);

// ---------- composant principal ----------
export default function Cdm2026() {
  const [pret, setPret] = useState(false);
  const [pronos, setPronos] = useState<EtatPartage["pronos"]>({ gabin: {}, lea: {} });
  const [resultats, setResultats] = useState<EtatPartage["resultats"]>({});
  const [brouillons, setBrouillons] = useState<Record<string, Brouillon>>({});
  const [brouillonsResultat, setBrouillonsResultat] = useState<Record<number, Brouillon>>({});
  const [editionResultat, setEditionResultat] = useState<Record<number, boolean>>({});
  const [maintenant, setMaintenant] = useState(() => Date.now());
  const [onglet, setOnglet] = useState<"matchs" | "stats">("matchs");
  const [afficherPasses, setAfficherPasses] = useState(false);
  const [afficherTout, setAfficherTout] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const minuteurToast = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notifier = useCallback((message: string) => {
    setToast(message);
    if (minuteurToast.current) clearTimeout(minuteurToast.current);
    minuteurToast.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const [synchroEnCours, setSynchroEnCours] = useState(false);
  const dernierClicSync = useRef(0);

  const rafraichirPartage = useCallback(async (): Promise<boolean> => {
    try {
      const { pronos, resultats } = await chargerTout();
      setPronos(pronos);
      setResultats(resultats);
      return true;
    } catch (e) { console.error(e); return false; }
  }, []);

  useEffect(() => {
    (async () => {
      try { await amorcerSiVide(); } catch (e) { console.error("amorçage", e); }
      await rafraichirPartage();
      setPret(true);
    })();
  }, [rafraichirPartage]);

  useEffect(() => {
    const t = setInterval(() => { setMaintenant(Date.now()); rafraichirPartage(); }, 15000);
    const surVisibilite = () => { if (!document.hidden) { setMaintenant(Date.now()); rafraichirPartage(); } };
    document.addEventListener("visibilitychange", surVisibilite);
    return () => { clearInterval(t); document.removeEventListener("visibilitychange", surVisibilite); };
  }, [rafraichirPartage]);

  // ---------- pronos ----------
  const enregistrerProno = async (j: Joueur, id: number) => {
    const brouillon = brouillons[j + ":" + id];
    if (!brouillon || !scoreValide(brouillon[0]) || !scoreValide(brouillon[1])) return;
    const m = MATCHS.find((x) => x[0] === id);
    if (!m || Date.now() >= horodatageMatch(m)) { notifier("Trop tard, le match a commencé 🔒"); return; }
    const score: Score = [Number(brouillon[0]), Number(brouillon[1])];
    setPronos((b) => ({ ...b, [j]: { ...b[j], [id]: score } }));
    setBrouillons((bb) => { const c = { ...bb }; delete c[j + ":" + id]; return c; });
    const ok = await enregistrerLigne(id, j, score[0], score[1]);
    notifier(ok ? `Prono de ${JOUEURS[j].nom} enregistré ✓` : "Erreur réseau, réessaie");
    if (!ok) rafraichirPartage();
  };

  // ---------- résultats (saisie manuelle, filet de sécurité) ----------
  const enregistrerResultat = async (id: number) => {
    const brouillon = brouillonsResultat[id];
    if (!brouillon || !scoreValide(brouillon[0]) || !scoreValide(brouillon[1])) return;
    const score: Score = [Number(brouillon[0]), Number(brouillon[1])];
    setResultats((r) => ({ ...r, [id]: score }));
    setBrouillonsResultat((bb) => { const c = { ...bb }; delete c[id]; return c; });
    setEditionResultat((e) => ({ ...e, [id]: false }));
    const ok = await enregistrerLigne(id, "result", score[0], score[1]);
    notifier(ok ? "Score enregistré ✓" : "Erreur réseau");
    if (!ok) rafraichirPartage();
  };

  // ---------- bouton refresh : déclenche la récup. des scores ----------
  const lancerSync = async () => {
    const depuis = Date.now() - dernierClicSync.current;
    if (depuis < 30000) { notifier("Patiente quelques secondes ⏳"); return; }
    dernierClicSync.current = Date.now();
    setSynchroEnCours(true);
    try {
      const res = await appelerSync();
      await rafraichirPartage();
      const n = res && res.updated ? res.updated : 0;
      notifier(n > 0 ? `${n} résultat${n > 1 ? "s" : ""} récupéré${n > 1 ? "s" : ""} ✓` : "Aucun nouveau score pour l'instant");
    } catch (e) {
      console.error(e);
      notifier("Récup impossible, saisis le score au ✎");
    } finally { setSynchroEnCours(false); }
  };

  // ---------- calculs ----------
  const totaux = useMemo<Record<Joueur, Stat>>(() => {
    const t: Record<Joueur, Stat> = {
      gabin: { pts: 0, n3: 0, n2: 0, n1: 0, n0: 0, joues: 0 },
      lea: { pts: 0, n3: 0, n2: 0, n1: 0, n0: 0, joues: 0 },
    };
    for (const m of MATCHS) {
      const resultat = resultats[m[0]];
      if (!resultat) continue;
      for (const j of IDS_JOUEURS) {
        const pts = calculerPoints(pronos[j][m[0]], resultat);
        if (pts === null) continue;
        t[j].pts += pts; t[j].joues += 1;
        t[j][`n${pts}` as "n0" | "n1" | "n2" | "n3"] += 1;
      }
    }
    return t;
  }, [pronos, resultats]);

  const groupes = useMemo<GroupeJour[]>(() => {
    const cleAujourdhui = cleJour(maintenant);
    const horizon = maintenant + 7 * 86400000;
    const tries = [...MATCHS].sort((a, b) => horodatageMatch(a) - horodatageMatch(b));
    const map = new Map<string, GroupeJour>();
    for (const m of tries) {
      const k = cleJour(horodatageMatch(m));
      if (!map.has(k)) map.set(k, { cle: k, libelle: formatJour(horodatageMatch(m)), matchs: [], passe: k < cleAujourdhui, lointain: horodatageMatch(m) > horizon && k > cleAujourdhui });
      map.get(k)!.matchs.push(m);
    }
    return [...map.values()];
  }, [maintenant]);

  const journalTermines = useMemo<Match[]>(
    () => [...MATCHS].filter((m) => resultats[m[0]]).sort((a, b) => horodatageMatch(b) - horodatageMatch(a)),
    [resultats]
  );

  // ---------- rendu ----------
  if (!pret) {
    return (<div className="wc-root"><Style />
      <div className="wc-boot">Échauffement…</div>
    </div>);
  }

  const meneur: Joueur | null = totaux.gabin.pts === totaux.lea.pts ? null : totaux.gabin.pts > totaux.lea.pts ? "gabin" : "lea";

  return (
    <div className="wc-root"><Style />
      {/* ---- tableau d'affichage (signature) ---- */}
      <header className="wc-board">
        <div className="wc-pitchlines" aria-hidden="true"><span className="wc-circle" /><span className="wc-halfway" /></div>
        <div className="wc-eyebrow">Coupe du Monde 2026 · le duel</div>
        <div className="wc-score">
          <div className={"wc-side" + (meneur === "gabin" ? " lead" : "")}>
            <span className="wc-pname" style={{ color: JOUEURS.gabin.couleur }}>Gabin</span>
            <span className="wc-pts">{totaux.gabin.pts}</span>
          </div>
          <span className="wc-dash">–</span>
          <div className={"wc-side" + (meneur === "lea" ? " lead" : "")}>
            <span className="wc-pts">{totaux.lea.pts}</span>
            <span className="wc-pname" style={{ color: JOUEURS.lea.couleur }}>Léa</span>
          </div>
        </div>
        <div className="wc-board-sub">
          <span>Pronos verrouillés au coup d'envoi · scores en ✎</span>
          <button className="wc-sync" onClick={lancerSync} disabled={synchroEnCours}>
            {synchroEnCours ? "Récupération…" : "↻ Rafraîchir scores"}
          </button>
        </div>
      </header>

      <nav className="wc-tabs">
        <button className={onglet === "matchs" ? "on" : ""} onClick={() => setOnglet("matchs")}>Matchs</button>
        <button className={onglet === "stats" ? "on" : ""} onClick={() => setOnglet("stats")}>Stats</button>
      </nav>

      {onglet === "matchs" && (
        <main className="wc-list">
          <section className="wc-homelb">
            {IDS_JOUEURS.map((j) => (
              <div key={j} className={"wc-homelb-row" + (meneur === j ? " lead" : "")} style={styleCouleur(JOUEURS[j].couleur)}>
                <span className="wc-homelb-name">{meneur === j ? "👑 " : ""}{JOUEURS[j].nom}</span>
                <span className="wc-homelb-detail">
                  {totaux[j].n3} exact{totaux[j].n3 > 1 ? "s" : ""} · {totaux[j].n2} écart{totaux[j].n2 > 1 ? "s" : ""} · {totaux[j].n1} vainq.
                </span>
                <span className="wc-homelb-pts">{totaux[j].pts} pts</span>
              </div>
            ))}
          </section>
          {groupes.some((g) => g.passe) && (
            <button className="wc-toggle" onClick={() => setAfficherPasses((v) => !v)}>
              {afficherPasses ? "Masquer les matchs passés" : `Matchs passés (${groupes.filter((g) => g.passe).reduce((s, g) => s + g.matchs.length, 0)})`}
            </button>
          )}
          {groupes.filter((g) => (g.passe ? afficherPasses : g.lointain ? afficherTout : true)).map((g) => (
            <section key={g.cle} className="wc-daygroup">
              <h2 className="wc-day">{g.cle === cleJour(maintenant) ? "Aujourd'hui · " : ""}{g.libelle}</h2>
              {g.matchs.map((m) => (
                <CarteMatch key={m[0]} match={m} maintenant={maintenant}
                  pronos={pronos} resultats={resultats}
                  brouillons={brouillons} setBrouillons={setBrouillons} enregistrerProno={enregistrerProno}
                  brouillonsResultat={brouillonsResultat} setBrouillonsResultat={setBrouillonsResultat}
                  editionResultat={editionResultat} setEditionResultat={setEditionResultat} enregistrerResultat={enregistrerResultat} />
              ))}
            </section>
          ))}
          {!afficherTout && groupes.some((g) => g.lointain) && (
            <button className="wc-toggle" onClick={() => setAfficherTout(true)}>Afficher tout le calendrier (jusqu'à la finale du 19 juillet)</button>
          )}
        </main>
      )}

      {onglet === "stats" && (
        <main className="wc-list">
          <section className="wc-statgrid">
            {IDS_JOUEURS.map((j) => (
              <div key={j} className="wc-statcard" style={styleCouleur(JOUEURS[j].couleur)}>
                <div className="wc-statname">{JOUEURS[j].nom}</div>
                <div className="wc-statpts">{totaux[j].pts} <small>pts</small></div>
                <dl>
                  <div><dt>Scores exacts</dt><dd>{totaux[j].n3} <small>× 3</small></dd></div>
                  <div><dt>Bons écarts</dt><dd>{totaux[j].n2} <small>× 2</small></dd></div>
                  <div><dt>Bons vainqueurs</dt><dd>{totaux[j].n1} <small>× 1</small></dd></div>
                  <div><dt>Manqués</dt><dd>{totaux[j].n0}</dd></div>
                  <div><dt>Matchs joués</dt><dd>{totaux[j].joues}</dd></div>
                </dl>
              </div>
            ))}
          </section>
          <h2 className="wc-day">Derniers matchs marqués</h2>
          {journalTermines.length === 0 && <p className="wc-empty">Aucun match terminé avec un prono pour l'instant, ça commence ce soir.</p>}
          {journalTermines.map((m) => {
            const resultat = resultats[m[0]]!;
            return (
              <div className="wc-logrow" key={m[0]}>
                <div className="wc-logmatch">
                  <span>{m[2]} <b>{resultat[0]}–{resultat[1]}</b> {m[3]}</span>
                  <small>{m[4]} · {formatJour(horodatageMatch(m))}</small>
                </div>
                <div className="wc-logpts">
                  {IDS_JOUEURS.map((j) => {
                    const pts = calculerPoints(pronos[j][m[0]], resultat);
                    return (
                      <span key={j} className={"wc-chip pt" + (pts ?? "x")} style={styleCouleur(JOUEURS[j].couleur)}>
                        {JOUEURS[j].nom[0]} · {pronos[j][m[0]] ? pronos[j][m[0]].join("–") : "—"} · {pts === null ? "0" : "+" + pts}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </main>
      )}

      {toast && <div className="wc-toast" role="status">{toast}</div>}
      <footer className="wc-foot">Barème : exact +3 · écart +2 · vainqueur +1 · verrouillage au coup d'envoi (heure de Paris)</footer>
    </div>
  );
}

// ---------- carte match ----------
interface ProprietesCarteMatch {
  match: Match;
  maintenant: number;
  pronos: EtatPartage["pronos"];
  resultats: EtatPartage["resultats"];
  brouillons: Record<string, Brouillon>;
  setBrouillons: React.Dispatch<React.SetStateAction<Record<string, Brouillon>>>;
  enregistrerProno: (j: Joueur, id: number) => void;
  brouillonsResultat: Record<number, Brouillon>;
  setBrouillonsResultat: React.Dispatch<React.SetStateAction<Record<number, Brouillon>>>;
  editionResultat: Record<number, boolean>;
  setEditionResultat: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  enregistrerResultat: (id: number) => void;
}

function CarteMatch({ match, maintenant, pronos, resultats, brouillons, setBrouillons, enregistrerProno, brouillonsResultat, setBrouillonsResultat, editionResultat, setEditionResultat, enregistrerResultat }: ProprietesCarteMatch) {
  const [id, , equipe1, equipe2, phase, ville] = match;
  const coupEnvoi = horodatageMatch(match);
  const verrouille = maintenant >= coupEnvoi;
  const probablementFini = maintenant > coupEnvoi + MATCH_TERMINE_MS;
  const enDirect = verrouille && !probablementFini && !resultats[id];
  const resultat = resultats[id];

  const enEdition = editionResultat[id];
  const brouillonRes: Brouillon = brouillonsResultat[id] || (resultat ? [String(resultat[0]), String(resultat[1])] : ["", ""]);
  const setBrouillonRes = (i: number, v: string) => setBrouillonsResultat((d) => {
    const cur: Brouillon = d[id] ? [...d[id]] as Brouillon : [...brouillonRes] as Brouillon;
    cur[i] = v;
    return { ...d, [id]: cur };
  });

  return (
    <article className={"wc-card" + (enDirect ? " live" : "")}>
      <div className="wc-meta">
        <span className="wc-time">{formatHeure(coupEnvoi)}</span>
        <span className="wc-stage">{phase}</span>
        <span className="wc-city">{ville}</span>
        {enDirect && <span className="wc-live">● en cours</span>}
        {verrouille && !enDirect && !resultat && <span className="wc-lock">terminé ?</span>}
        {!verrouille && <span className="wc-lock dim">🔒 au coup d'envoi</span>}
      </div>

      <div className="wc-teams">
        <span className="t1">{equipe1}</span>
        <span className="wc-res">
          {resultat ? `${resultat[0]} – ${resultat[1]}` : verrouille ? "—" : "vs"}
          {verrouille && (
            <button className="wc-edit" title="Saisir ou corriger le score"
              onClick={() => setEditionResultat((e) => ({ ...e, [id]: !e[id] }))}>✎</button>
          )}
        </span>
        <span className="t2">{equipe2}</span>
      </div>

      {enEdition && (
        <div className="wc-resentry">
          <span>Score final :</span>
          <input inputMode="numeric" value={brouillonRes[0]} onChange={(e) => setBrouillonRes(0, e.target.value)} aria-label={`Buts ${equipe1}`} />
          <span>–</span>
          <input inputMode="numeric" value={brouillonRes[1]} onChange={(e) => setBrouillonRes(1, e.target.value)} aria-label={`Buts ${equipe2}`} />
          <button className="wc-ok" disabled={!scoreValide(brouillonRes[0]) || !scoreValide(brouillonRes[1])} onClick={() => enregistrerResultat(id)}>OK</button>
        </div>
      )}

      <div className="wc-bets">
        {IDS_JOUEURS.map((j) => {
          const prono = pronos[j][id];
          const cle = j + ":" + id;
          const saisie = brouillons[cle];
          const pts = resultat ? calculerPoints(prono, resultat) : null;
          const pret = saisie && scoreValide(saisie[0]) && scoreValide(saisie[1]) &&
            (!prono || Number(saisie[0]) !== prono[0] || Number(saisie[1]) !== prono[1]);
          const setSaisie = (i: number, v: string) => setBrouillons((bb) => {
            const cur: Brouillon = bb[cle] ? [...bb[cle]] as Brouillon : prono ? [...prono] as Brouillon : ["", ""];
            cur[i] = v;
            return { ...bb, [cle]: cur };
          });
          return (
            <div className="wc-betrow" key={j} style={styleCouleur(JOUEURS[j].couleur)}>
              <span className="wc-who">{JOUEURS[j].nom}</span>
              {verrouille ? (
                <span className="wc-betval">{prono ? prono.join(" – ") : "pas de prono"}</span>
              ) : (
                <span className="wc-betinputs">
                  <input inputMode="numeric" placeholder="·" value={saisie ? saisie[0] : prono ? prono[0] : ""}
                    onChange={(e) => setSaisie(0, e.target.value)} aria-label={`Prono de ${JOUEURS[j].nom}, buts ${equipe1}`} />
                  <span>–</span>
                  <input inputMode="numeric" placeholder="·" value={saisie ? saisie[1] : prono ? prono[1] : ""}
                    onChange={(e) => setSaisie(1, e.target.value)} aria-label={`Prono de ${JOUEURS[j].nom}, buts ${equipe2}`} />
                  {pret && <button className="wc-ok" onClick={() => enregistrerProno(j, id)}>OK</button>}
                  {prono && !pret && <span className="wc-saved">✓</span>}
                </span>
              )}
              {pts !== null && <span className={"wc-chip pt" + pts}>{LIBELLE_PTS[pts]}</span>}
            </div>
          );
        })}
      </div>
    </article>
  );
}

// ---------- styles ----------
function Style() {
  return (<style>{`
  .wc-root{
    --pitch:#0B3225; --pitch2:#0E3D2D; --card:#114231; --card2:#0F3A2B;
    --line:rgba(238,235,222,.16); --chalk:#EFEBDD; --muted:#93AC9E;
    --amber:#FFC400; --ok:#7BE3A0;
    min-height:100vh; background:
      radial-gradient(1200px 500px at 50% -180px, #14523C 0%, transparent 60%),
      var(--pitch);
    color:var(--chalk);
    font-family:"Avenir Next", "Segoe UI", system-ui, sans-serif;
    max-width:600px; margin:0 auto; padding:0 0 40px;
  }
  .wc-root *{box-sizing:border-box}
  .wc-root button{font:inherit; color:inherit; background:none; border:none; cursor:pointer}
  .wc-root :focus-visible{outline:2px solid var(--amber); outline-offset:2px; border-radius:4px}

  .wc-eyebrow{font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:var(--muted); text-align:center}

  /* tableau d'affichage */
  .wc-board{position:relative; overflow:hidden; padding:22px 16px 14px; border-bottom:2px solid var(--line)}
  .wc-pitchlines{position:absolute; inset:0; pointer-events:none}
  .wc-circle{position:absolute; left:50%; top:58%; width:190px; height:190px; transform:translate(-50%,-50%);
    border:2px solid var(--line); border-radius:50%}
  .wc-halfway{position:absolute; left:50%; top:0; bottom:0; width:2px; background:var(--line)}
  .wc-score{position:relative; display:flex; align-items:baseline; justify-content:center; gap:14px; margin-top:10px}
  .wc-side{display:flex; align-items:baseline; gap:12px; opacity:.85}
  .wc-side.lead{opacity:1}
  .wc-side.lead .wc-pts{color:var(--amber); text-shadow:0 0 24px rgba(255,196,0,.35)}
  .wc-pname{font-size:15px; font-weight:800; letter-spacing:.14em; text-transform:uppercase}
  .wc-pts{font-size:52px; font-weight:900; line-height:1; font-variant-numeric:tabular-nums; letter-spacing:-.02em}
  .wc-dash{font-size:30px; color:var(--muted)}
  .wc-board-sub{position:relative; display:flex; justify-content:space-between; align-items:center; gap:8px;
    margin-top:14px; font-size:12.5px; color:var(--muted); flex-wrap:wrap}
  .wc-link{text-decoration:underline; color:var(--muted); padding:0}
  .wc-sync{border:1px solid var(--line); border-radius:999px; padding:5px 12px; font-size:12px; color:var(--chalk); background:rgba(255,255,255,.04)}
  .wc-sync:disabled{opacity:.55; cursor:wait}

  /* onglets */
  .wc-tabs{display:flex; border-bottom:1px solid var(--line); position:sticky; top:0; z-index:5;
    background:rgba(11,50,37,.92); backdrop-filter:blur(6px)}
  .wc-tabs button{flex:1; padding:11px 0; font-size:13px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
    color:var(--muted); border-bottom:3px solid transparent}
  .wc-tabs button.on{color:var(--chalk); border-bottom-color:var(--amber)}

  .wc-list{padding:14px 12px 0}
  .wc-homelb{border:1px solid var(--line); border-radius:14px; overflow:hidden; margin-bottom:6px;
    background:linear-gradient(180deg, var(--card), var(--card2))}
  .wc-homelb-row{display:flex; align-items:center; gap:10px; padding:10px 13px; opacity:.82}
  .wc-homelb-row + .wc-homelb-row{border-top:1px solid var(--line)}
  .wc-homelb-row.lead{opacity:1; background:rgba(255,196,0,.06)}
  .wc-homelb-name{font-size:13px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--pc); min-width:92px}
  .wc-homelb-detail{font-size:11.5px; color:var(--muted); flex:1}
  .wc-homelb-pts{font-size:17px; font-weight:900; font-variant-numeric:tabular-nums}
  .wc-homelb-row.lead .wc-homelb-pts{color:var(--amber)}
  .wc-day{font-size:12px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; color:var(--muted);
    margin:20px 4px 8px; padding-bottom:5px; border-bottom:1px dashed var(--line)}
  .wc-toggle{display:block; width:100%; margin:10px 0; padding:9px; border:1px dashed var(--line); border-radius:10px;
    color:var(--muted); font-size:13px}
  .wc-empty{color:var(--muted); font-size:14px; padding:8px 4px}

  /* carte match */
  .wc-card{background:linear-gradient(180deg, var(--card), var(--card2)); border:1px solid var(--line);
    border-radius:14px; padding:10px 12px 12px; margin-bottom:10px}
  .wc-card.live{border-color:rgba(255,196,0,.5)}
  .wc-meta{display:flex; gap:8px; align-items:center; font-size:11.5px; color:var(--muted); flex-wrap:wrap}
  .wc-time{font-weight:800; color:var(--chalk); font-variant-numeric:tabular-nums}
  .wc-stage{border:1px solid var(--line); border-radius:5px; padding:1px 6px; letter-spacing:.06em}
  .wc-city{overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:40%}
  .wc-live{color:var(--amber); font-weight:700; margin-left:auto}
  .wc-lock{margin-left:auto} .wc-lock.dim{opacity:.7}
  .wc-teams{display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:10px; margin:9px 0 4px}
  .wc-teams .t1{text-align:right} .wc-teams .t2{text-align:left}
  .wc-teams span{font-size:15.5px; font-weight:700}
  .wc-res{font-size:19px; font-weight:900; font-variant-numeric:tabular-nums; color:var(--amber); white-space:nowrap}
  .wc-edit{font-size:13px; margin-left:6px; opacity:.7}
  .wc-resentry{display:flex; align-items:center; gap:7px; font-size:13px; color:var(--muted); margin:4px 0 6px; justify-content:center}

  .wc-bets{display:flex; flex-direction:column; gap:6px; margin-top:7px; border-top:1px solid var(--line); padding-top:8px}
  .wc-betrow{display:flex; align-items:center; gap:9px; min-height:30px; flex-wrap:wrap}
  .wc-who{font-size:11px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--pc); width:54px}
  .wc-betval{font-size:14.5px; font-weight:700; font-variant-numeric:tabular-nums}
  .wc-betinputs{display:flex; align-items:center; gap:6px}
  .wc-root input{width:42px; height:32px; text-align:center; font-size:15px; font-weight:700; color:var(--chalk);
    background:rgba(255,255,255,.06); border:1px solid var(--line); border-radius:8px}
  .wc-root input:focus{border-color:var(--amber); outline:none}
  .wc-ok{background:var(--amber); color:#15301F; font-weight:800; font-size:12.5px; border-radius:8px; padding:6px 12px}
  .wc-ok:disabled{opacity:.4}
  .wc-saved{color:var(--ok); font-weight:800}
  .wc-chip{margin-left:auto; font-size:11px; font-weight:800; letter-spacing:.04em; border-radius:999px; padding:3px 9px;
    border:1px solid var(--line); color:var(--muted)}
  .wc-chip.pt3{background:var(--amber); color:#15301F; border-color:transparent}
  .wc-chip.pt2{background:rgba(255,196,0,.18); color:var(--amber); border-color:rgba(255,196,0,.4)}
  .wc-chip.pt1{color:var(--chalk)}

  /* stats */
  .wc-statgrid{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:6px}
  .wc-statcard{border:1px solid var(--line); border-top:3px solid var(--pc); border-radius:14px; padding:12px;
    background:linear-gradient(180deg, var(--card), var(--card2))}
  .wc-statname{font-size:12px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; color:var(--pc)}
  .wc-statpts{font-size:34px; font-weight:900; font-variant-numeric:tabular-nums; margin:4px 0 8px}
  .wc-statpts small{font-size:13px; font-weight:600; color:var(--muted)}
  .wc-statcard dl{margin:0; display:flex; flex-direction:column; gap:5px}
  .wc-statcard dl div{display:flex; justify-content:space-between; font-size:13px}
  .wc-statcard dt{color:var(--muted)} .wc-statcard dd{margin:0; font-weight:800; font-variant-numeric:tabular-nums}
  .wc-statcard dd small{color:var(--muted); font-weight:500}

  .wc-logrow{display:flex; flex-direction:column; gap:6px; border-bottom:1px solid var(--line); padding:9px 4px}
  .wc-logmatch{display:flex; justify-content:space-between; gap:10px; font-size:14px; align-items:baseline; flex-wrap:wrap}
  .wc-logmatch b{color:var(--amber); font-variant-numeric:tabular-nums}
  .wc-logmatch small{color:var(--muted); font-size:11.5px}
  .wc-logpts{display:flex; gap:8px; flex-wrap:wrap}
  .wc-logpts .wc-chip{margin-left:0; border-color:var(--pc)}

  .wc-toast{position:fixed; bottom:22px; left:50%; transform:translateX(-50%); background:var(--chalk); color:#15301F;
    font-weight:700; font-size:13.5px; padding:10px 18px; border-radius:999px; box-shadow:0 6px 24px rgba(0,0,0,.4);
    animation:wcpop .18s ease; z-index:50; max-width:90%; text-align:center}
  @keyframes wcpop{from{opacity:0; transform:translateX(-50%) translateY(8px)}}
  .wc-foot{text-align:center; font-size:11px; color:var(--muted); padding:26px 16px 0}
  .wc-boot{padding:80px 0; text-align:center; color:var(--muted)}
  @media (prefers-reduced-motion:reduce){.wc-toast{animation:none}}
  @media (max-width:380px){.wc-pts{font-size:42px}.wc-teams span{font-size:14px}}

  /* ---- tablette & desktop : on élargit et on passe les matchs en grille ---- */
  @media (min-width:760px){
    /* le panneau devient une carte flottante avec de l'air autour */
    .wc-root{max-width:1040px; min-height:auto; margin:40px auto 56px; padding-bottom:24px;
      border:1px solid var(--line); border-radius:22px; box-shadow:0 28px 80px rgba(0,0,0,.30)}
    .wc-board{padding:30px 24px 18px}
    .wc-pts{font-size:60px}
    .wc-list{padding:20px 20px 0}
    .wc-tabs{top:0}
    /* chaque jour : titre pleine largeur, cartes en 2 colonnes (hauteur égale par ligne) */
    .wc-daygroup{display:grid; grid-template-columns:1fr 1fr; gap:12px}
    .wc-daygroup .wc-day{grid-column:1 / -1; margin:24px 4px 4px}
    .wc-daygroup .wc-card{margin-bottom:0}
    /* le tableau d'affichage et la barre de leaderboard restent pleine largeur */
    .wc-statgrid{gap:14px}
  }
  @media (min-width:1040px){
    /* sur très large écran, 3 colonnes pour limiter le scroll les grosses journées */
    .wc-daygroup{grid-template-columns:repeat(3, 1fr)}
  }
  `}</style>);
}
