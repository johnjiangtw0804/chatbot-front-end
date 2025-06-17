function Snackbar({ snackbar }) {
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
