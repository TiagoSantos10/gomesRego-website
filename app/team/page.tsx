import { getTeamPage } from "@/services/apis/contentful/contentful";
import PartnerSection from "../components/TeamPage/PartnerSection/PartnerSection";
import { TeamMemberType } from "../utils/types/types";

const Team = async () => {
    const teamPage = await getTeamPage();

    return (
        <>
            {
                teamPage.member.map((member: TeamMemberType, index: number) => {
                    return (
                        <PartnerSection
                            key={index}
                            image={member.fields.image.fields.file.url}
                            name={member.fields.name}
                            description={member.fields.description}
                            email={member.fields.email}
                            facebook={member.fields.facebook}
                            linkedin={member.fields.linkedin}
                            imageAlignment={index % 2 === 0 ? "left" : "right"}
                            variant={index % 2 === 0 ? "light" : "dark"}
                        />
                    );
                })
            }
        </>
    );
};

export default Team;
