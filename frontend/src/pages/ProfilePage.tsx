import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Username from "@/components/profile/Username";
import AnimatedPage from "@/components/shared/AnimatedPage";
import useUserAuthQuery from "@/hooks/auth/useUserAuthQuery.hook";

export default function ProfilePage() {
  const { t } = useTranslation();
  const { data: userAuth } = useUserAuthQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userAuth) navigate("/");
  }, [userAuth]);

  return (
    <AnimatedPage>
      <div className="m-4 mx-auto flex w-9/12 flex-col gap-4 rounded-md bg-fill-3 p-4">
        <Username />
        <div className="flex items-center justify-between gap-4">
          <p className="first-letter:uppercase">
            {t("email")} : {userAuth?.email}
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}
