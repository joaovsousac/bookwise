import { LatestRatings } from "@/components/LatestRatings";
import PopularBooks from "./PopularBooks/index.component";
import { FlexContainer, HomeRatings, PopularBooksContainer } from "./styles";
import Sidebar from "@/components/Sidebar";
import PseudoSidebar from "@/components/Sidebar/PseudoSidebar";
import { ChartLineUp } from "phosphor-react";

export default function Home() {
    return (
        <>
            <FlexContainer>
                <Sidebar />
                <PseudoSidebar />
                <HomeRatings>
                    <h2><ChartLineUp /> Início</h2>
                    <p>Avaliações mais recentes</p>
                    <LatestRatings />
                </HomeRatings>
                <PopularBooksContainer>
                    <PopularBooks />
                </PopularBooksContainer>
            </FlexContainer>
        </>
    )
}