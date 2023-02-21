import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { question, answer } = attributes;
	return (
		<article>
		<RichText
			{ ...useBlockProps() }
			onChange={ ( value ) => setAttributes( { question: value } ) }
			value={ question }
			placeholder={ __( 'Your Text', 'text-box' ) }
			tagName="h4"
			allowedFormats={ [ 'core/bold' ] }
		/>
		<i class="fa-solid fa-arrow-right"></i>
		<RichText
			{ ...useBlockProps() }
			onChange={ ( value ) => setAttributes( { answer: value } ) }
			value={ answer }
			placeholder={ __( 'Your Text', 'text-box' ) }
			tagName="p"
			allowedFormats={ [ 'core/bold' ] }
		/>
		</article>
	);
}