type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    lede?: string;
};

const SectionHeader = ({eyebrow, title, lede}: SectionHeaderProps) => (
    <div className="mb-14">
        <p className="font-mono text-sm text-accent mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            {title}
        </h2>
        {lede && (
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">{lede}</p>
        )}
    </div>
);

export default SectionHeader;
