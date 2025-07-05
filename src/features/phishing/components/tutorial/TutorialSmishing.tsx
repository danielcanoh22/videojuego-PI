import { Message } from "@/features/phishing/components/common/Message";
import { TutorialSmishingSteps } from "./TutorialSmishingSteps";

export const TutorialSmishing = () => {
  return (
    <>
      <video
        src="/assets/img/smishing/tutorial-smishing.mp4"
        autoPlay
        loop
      ></video>
      <div className="flex flex-col gap-4">
        <TutorialSmishingSteps />
        <Message styles="text-xl shadow-md">
          <p>
            ⭐ Ganarás puntos si identificas el mensaje de texto correctamente.
          </p>
        </Message>
      </div>
    </>
  );
};
