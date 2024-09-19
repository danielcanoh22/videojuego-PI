import { EmailContent } from "./EmailContent";
import { EmailLayout } from "./EmailLayout";
import { EmailLogo } from "./EmailLogo";

export const Email = () => {
  return (
    <EmailLayout>
      <EmailLogo />
      <EmailContent />
    </EmailLayout>
  );
};
