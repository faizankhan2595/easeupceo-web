// Continuous left-scrolling strip that pauses on hover (see .marquee in index.css).
// Items are rendered twice so the loop has no gap; the copy is hidden from
// screen readers. `renderItem(item, isCopy)` draws one item.
export default function Marquee({ items, renderItem, itemClassName = "", className = "" }) {
  return (
    <div
      className={`marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] ${className}`}
    >
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((item, i) => {
          const isCopy = i >= items.length;
          return (
            <div key={i} aria-hidden={isCopy ? "true" : undefined} className={`shrink-0 ${itemClassName}`}>
              {renderItem(item, isCopy)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
