import Modal from "./Modal";
import Toasts from "./Toasts";

export default function Alerts({
  mobileFirst = false,
}: {
  mobileFirst?: boolean;
}) {
  return (
    <>
      <Toasts mobileFirst={mobileFirst} />
      <Modal mobileFirst={mobileFirst} />
    </>
  );
}
