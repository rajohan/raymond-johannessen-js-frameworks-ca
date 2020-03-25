import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            text: string;
            link: string;
            linkHover: string;
            linkActive: string;
        };
    }
}
