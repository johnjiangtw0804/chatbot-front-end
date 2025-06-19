function Snackbar({ snackbar }) {
  console.log("snackbar rendering");
  console.log({ snackbar });
  return (
    <>
      {snackbar.open && (
        <div className={`snackbar ${snackbar.type}`}>
          <span>{snackbar.message}</span>
        </div>
      )}
    </>
  );
}

export default Snackbar;
