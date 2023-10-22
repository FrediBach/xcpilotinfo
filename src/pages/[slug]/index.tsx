import ProfilePage from "@/components/basejump-default-content/profile";
import { useRouter } from "next/router";

const PilotProfilePage = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <ProfilePage slug={slug} />;
};

export default PilotProfilePage;
