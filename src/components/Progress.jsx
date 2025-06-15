function CircularProgress({ classes = "", size = "" }) {
  return (
    <div
      role="progressbar"
      className={`circular-progress ${size} ${classes}`}
    ></div>
  );
}
export default CircularProgress;
