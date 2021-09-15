const PngIcon = ({ src, width, height, onClick }) => (
  <img
    src={`/img/png/${src}`}
    alt={src}
    width={width || "100%"}
    height={height}
    onClick={onClick}
  />
)

export default PngIcon
