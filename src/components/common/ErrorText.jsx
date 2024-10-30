import Emoji from "@/components/common/Emoji.jsx";

const ErrorText = ({ error }) => {
  return (
    <p className="text-lg space-x-1">
      <span className="error-messages">{error}</span>
      <span className="text-xl">
          <Emoji label={"warning"} symbol={"⚠️"} />
      </span>
    </p>
  );
};

export default ErrorText;