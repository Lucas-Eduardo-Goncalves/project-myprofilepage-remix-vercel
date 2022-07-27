import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';

import { AreaButton, EditorContainer, ViewContainer, TabButton } from "./styles";
import { Form } from "@remix-run/react";

type MarkdownEditorProps = {
  formSubmitName: string;
  initialValue?: string;
}

export function MarkdownEditor({ formSubmitName, initialValue = "" }: MarkdownEditorProps) {
  const [value, setValue] = useState(initialValue);
  const [view, setView] = useState(false);

  return (
    <>
      <AreaButton>
        <TabButton isActive={!view} onClick={() => setView(false)}>
          Editor
        </TabButton>
        <TabButton isActive={view} onClick={() => setView(true)}>
          Visualisar
        </TabButton>

        <Form method="post" style={{ marginLeft: "auto" }}>
          <input type="hidden" name="value" value={value} />
          <TabButton
            type="submit"
            name="_action"
            value={formSubmitName}
            isError={value !== initialValue}
            isActive={false}
            disabled={value === initialValue}
          >
            {value !== initialValue ? "Itens para salvar" : "Tudo Certo"}
          </TabButton>
        </Form>
      </AreaButton>

      {!view ? (
        <EditorContainer>
          <MDEditor
            value={value}
            height={400}
            onChange={(e) => setValue(String(e))}
          />
        </EditorContainer>
      ) : (
        <ViewContainer>
          <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </ViewContainer>
      )}
    </>
  );
}
