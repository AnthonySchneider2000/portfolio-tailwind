import { useStateContext } from "utils/StateContext";
import { portfolioItems, AGSFlix } from "utils/constants";

const Title = ({ children }) => (
    <div className="text-[2rem] font-bold text-white">{children}</div>
);

export default function PortfolioDetailContainer() {
    const { projectSelected, selectedProjectName } = useStateContext();
    const trimmedName = selectedProjectName.replace(/\s/g, '');
    const project = portfolioItems[trimmedName] || AGSFlix;
    return (
        <div className="w-full bg-cyan-700 consistentRounding text-center mt-4 p-4">
            {projectSelected ? (
                <div className="portfolioDetail">
                    <Title>
                        {selectedProjectName}
                    </Title>
                    <div className="text-white text-[1.2rem]">
                        {project.description}
                    </div>
                </div>
            ) : (
                <div className="portfolioDetail">
                    <Title>
                        Select a project to view details
                    </Title>
                </div>
            )}
        </div>
    );
}
