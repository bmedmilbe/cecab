import { useTeam } from "../../hooks/common/useTeam";
import JoinNow from "../components/JoinNow";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
const TeamPage = () => {
  const { data, isLoading } = useTeam();

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeader title="Corpo Directivo" image="images/about/cacau14.jpg" />
      <div className="team-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {data?.map((member) => (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-box">
                  <div className="image">
                    <img
                      src={member.picture}
                      alt={`${member.name} ${member.role.title} cecab`}
                    />
                  </div>

                  <div className="content">
                    <h3>{member.name}</h3>
                    <span>{member.role.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gray-bg">
        <JoinNow />
      </div>
    </>
  );
};

export default TeamPage;
