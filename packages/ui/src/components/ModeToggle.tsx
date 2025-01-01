"use client"
import { useTheme } from "next-themes";
import { Button } from "./button.js";
export default function ModeToggleButton() {
    const { theme, setTheme } = useTheme();
    return (
        <Button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")} >
            ModeToggle
        </Button>
    );
}