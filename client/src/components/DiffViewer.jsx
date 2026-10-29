import React from 'react';
import { DiffEditor } from '@monaco-editor/react';

export default function DiffViewer({ original, modified, language = 'javascript', height = '350px' }) {
  if (!original || !modified) return <div classname="p-4 rounded-lg border border-slate-700 bg-slate-900 text-sm text-slate-400">Code comparison unavailable:originl or corrected code is empty.</div>;
  return (
    <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-inner">
      <DiffEditor
        height={height}
        language={language.toLowerCase()}
        theme="vs-dark"
        original={original}
        modified={modified}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          renderSideBySide: true,
        }}
      />
    </div>
  );
}
