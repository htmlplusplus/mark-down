import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MarkDown extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Array }) formattedText = [];

  _compileToHTML() {

  }

  _determineHeader() {

  }

  _formatHeader(text: String) {

  }

  _formatParagraph() {

  }

  _formatLineBreak() {

  }

  /**
   * @private
   * @description Analyzes the text and calls _formatBold(), _formatItalic(), or _formatBoldItalic()
   */
  _helpTextStyle() {

  }

  _formatBold() {

  }

  _formatItalic() {

  }

  _formatBoldItalic() {

  }

  _formatBlockQuote() {

  }

  /**
   * @private
   * @description Analyzes the list and will determine if it should format as an ordered list or an unordered
   */
  _helpFormatList() {

  }

  _formatUnorderedList() {

  }

  _formatOrderedList() {

  }

  _formatCodeBlock() {

  }

  _formatHorizontalLine() {

  }

  _formatLink() {

  }

  formatImage() {

  }

  _formatTable() {

  }

  _handleEscapeCharacters() {

  }

  render() {
    return html`
      <div class="markdown-wrapper">

      </div>
    `;
  }
}
