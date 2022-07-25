import MarkdownEditor from "@uiw/react-markdown-editor";
import { Container } from "./styles";

export function SimpleMarkdownEditor() {
  return (
    <Container>
      <MarkdownEditor
        toolbarsMode={[]}

        // value={this.state.markdown}
        onChange={e => console.log(e)}
      />
    </Container>
  )
}