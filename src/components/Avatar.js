import "../components/avatar.css";

export default function Avatar({ src = "", children }) {
  return (
    <div className="avatar">
      <img className="avatar__img" alt="profile picture" src={src} />
      {children && <span className="avatar__username">{children}</span>}
    </div>
  );
}
