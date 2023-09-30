import * as vscode from 'vscode';

function getCurrentLocalTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  return formattedTime;
}

function addOpacityTextOverlay() {
  // Define the text
  const opacityText = 'hello';

  // Get the active text editor and the current cursor position
  const editor = vscode.window.activeTextEditor;
  const position = editor?.selection.active;
	// Create a decoration type for the overlay
	const decorationType = vscode.window.createTextEditorDecorationType({
		opacity: '0.5', // Set the desired opacity level (0.0 to 1.0)
		before: {
		contentText: opacityText,
		},
	});
  if (editor && position) {
    // Insert the opacity text at the cursor position
    editor.edit((editBuilder) => {
      editBuilder.insert(position, opacityText);
    });
  }
}

function insertCurrentLocalTime() {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const currentTime = getCurrentLocalTime();
    editor.edit((editBuilder) => {
      editBuilder.insert(editor.selection.active, currentTime);
    });
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.addOpacityOverlay', () => {
      addOpacityTextOverlay();
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.insertLocalTime', () => {
		addOpacityTextOverlay();

    })
  );
}
