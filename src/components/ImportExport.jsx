export  function ImportExport() {
  return (
    <>
      <h3>Importing and exporting components</h3>
      <span>We can define as many components as we want inside a single file, but creating different files for different components will make them more modular and reusable in other files</span>
      <h3>Export/Import Syntax Reference</h3>
      <ExportImportTable />
    </>
  )
}

const ExportImportTable = () => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'lightgrey',
  };

  const thTdStyle = {
    border: '1px solid #475569', // Dark gray border
    padding: '10px',
    textAlign: 'left',
  };

  const codeStyle = {
    backgroundColor: 'darkgrey', 
    padding: '4px 8px',
    borderRadius: '4px',
    display: 'inline-block',
    fontFamily: 'monospace',
  };

  const containerStyle = {
    overflowX: 'auto',
    padding: '0px',
  };

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Syntax</th>
            <th style={thTdStyle}>Export statement</th>
            <th style={thTdStyle}>Import statement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>Default</td>
            <td style={thTdStyle}>
              <code style={codeStyle}>export default function Button() {'{}'}</code>
            </td>
            <td style={thTdStyle}>
              <code style={codeStyle}>import Button from './Button.js';</code>
            </td>
          </tr>
          <tr>
            <td style={thTdStyle}>Named</td>
            <td style={thTdStyle}>
              <code style={codeStyle}>export function Button() {'{}'}</code>
            </td>
            <td style={thTdStyle}>
              <code style={codeStyle}>import {'{ Button }'} from './Button.js';</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
