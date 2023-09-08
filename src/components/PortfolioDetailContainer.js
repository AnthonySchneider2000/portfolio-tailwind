import { useStateContext } from "utils/StateContext";

export default function PortfolioDetailContainer() {
    const { projectSelected, selectedProjectName } = useStateContext();
    return (
        <div className="portfolioDetailContainer">
            {projectSelected ? (
                <div className="portfolioDetail">
                    <div className="portfolioDetailTitle">
                        {selectedProjectName}
                    </div>
                    <div className="portfolioDetailDescription">
                        {selectedProjectName} is a project I worked on.
                    </div>
                </div>
            ) : (
                <div className="portfolioDetail">
                    <div className="portfolioDetailTitle">
                        Select a project to view details
                    </div>
                </div>
            )}
        </div>
    );
}
