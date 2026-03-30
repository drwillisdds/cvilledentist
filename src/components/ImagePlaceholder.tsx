interface ImagePlaceholderProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  aspectRatio = "16/9",
  label = "Image",
  className = "",
}: ImagePlaceholderProps) {
  const [width, height] = aspectRatio.split("/").map(Number);
  const paddingBottom = ((height / width) * 100).toFixed(2);

  return (
    <div
      className={`relative w-full bg-gradient-to-br from-navy to-slate-600 rounded-lg overflow-hidden ${className}`}
      style={{
        paddingBottom: `${paddingBottom}%`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
        <div className="text-center">
          <div className="text-white text-opacity-60 text-lg font-semibold">
            {label}
          </div>
          <div className="text-white text-opacity-40 text-sm mt-2">
            {aspectRatio}
          </div>
        </div>
      </div>
    </div>
  );
}
