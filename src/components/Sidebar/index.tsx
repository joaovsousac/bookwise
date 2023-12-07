import { ChartLineUp, Binoculars } from "phosphor-react";
import { SidebarContainer, SidebarContent, SidebarLogo, SidebarRectangle, SidebarSessions } from "./styles";

export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarContent>
                <SidebarLogo>
                    <img src='/images/logo.svg' />
                </SidebarLogo>
                <SidebarSessions>
                    <button><ChartLineUp size={24} /> Início</button>
                    <button><Binoculars size={24} /> Explorar</button>
                </SidebarSessions>
            </SidebarContent>
        </SidebarContainer>
    )
}