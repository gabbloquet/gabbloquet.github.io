let
  sources = import nix/sources.nix;
  nixpkgs = import sources.nixpkgs { };
in with nixpkgs;

mkShell {
  buildInputs = [
    nodejs-14_x
    niv # Tools to interact with Nix
  ];
}
