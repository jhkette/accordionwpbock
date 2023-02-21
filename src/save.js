import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { question, answer } = attributes;
	return (
		<article>
		<RichText.Content
			{ ...useBlockProps.save() }
			tagName="h4"
			value={ question }
		/>
			<i class="fa-solid fa-arrow-right"></i>
		<RichText.Content
			{ ...useBlockProps.save() }
			tagName="p"
			value={ answer }
		/>
		</article>
	);
}