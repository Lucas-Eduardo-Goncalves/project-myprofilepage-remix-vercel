import MDEditor from "@uiw/react-md-editor";
import { Container } from "./styles";

type MarckdownViewProps = {
  value: string;
}

export function MarckdownView({ value }: MarckdownViewProps) {
  return (
    <Container>
      <MDEditor.Markdown
        source={value}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </Container>
  )
}