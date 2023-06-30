import Github from "./Github";
import LinkedIn from "./LinkedIn";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-screen z-50 bg-white flex justify-center">
      <LinkedIn />
      <Github />
    </div>
  );
}
