import { NOTfound } from "../../assets/assets";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you’re looking for does not exist.</p>
      <div className="flex justify-center items-center">
        <img
          src={NOTfound}
          alt="Page not found"
          style={{ width: "400px", maxWidth: "80%", margin: "2rem 0" }}
        />
      </div>
    </div>
  );
}
