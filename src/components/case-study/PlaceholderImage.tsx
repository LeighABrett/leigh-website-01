export function PlaceholderImage({
  aspectRatio,
  className = "",
  alt = "",
}: {
  aspectRatio?: string;
  className?: string;
  alt?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-foreground/[0.06] ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={alt}
    />
  );
}
