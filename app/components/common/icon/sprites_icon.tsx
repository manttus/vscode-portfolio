interface ISpriteIcon {
  name: string;
  className: string;
  size: number;
}

export default function SpriteIcon({ name, className, size }: ISpriteIcon) {
  return (
    <>
      <svg width={size} height={size} className={className}>
        <use href={`./svg/sprite.svg#${name}`} />
      </svg>
    </>
  );
}
