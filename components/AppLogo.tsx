import { Text } from "react-native";

type AppLogoProp = {
    title: string;
    phone?: number;
}

export default function AppLogo({title, phone}: AppLogoProp) {
    return (
        <Text>{title} {phone}</Text>
    );
}