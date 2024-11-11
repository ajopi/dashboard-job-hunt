import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import React, { FC, useEffect, useRef, useState } from "react";
interface CKEditorProps {
  form: any;
  name: any;
  editorLoaded?: boolean;
}

const CKEditor: FC<CKEditorProps> = ({ form, name, editorLoaded }) => {
  // const editorRef = useRef<any>();
  // const { CKEditors, ClassicEditor } = editorRef.current || {};

  // useEffect(() => {
  //   editorRef.current = {
  //     CKEditors: require("@ckeditor/ckeditor5-react").CKEditor,
  //     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
  //   };
  // }, []);
  const editorRef = useRef<any>();
  const [EditorComponent, setEditorComponent] = useState({
    CKEditors: null,
    ClassicEditor: null,
  });

  useEffect(() => {
    const loadEditor = async () => {
      const { CKEditor } = await import("@ckeditor/ckeditor5-react");
      const ClassicEditor = await import("@ckeditor/ckeditor5-build-classic");
      setEditorComponent({
        CKEditors: CKEditor,
        ClassicEditor: ClassicEditor.default,
      });
    };

    loadEditor();
  }, []);

  const { CKEditors, ClassicEditor } = EditorComponent;
  return (
    <>
      {editorLoaded && CKEditors && ClassicEditor ? (
        <div>
          <CKEditors
            editor={ClassicEditor}
            data={form.getValues(name)}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              form.setValue(name, data);
            }}
          />
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormMessage className="mt-3" />
              </FormItem>
            )}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CKEditor;
