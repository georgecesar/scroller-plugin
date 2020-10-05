/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { addFilter } from "@wordpress/hooks";

const replaceMediaUpload = () => MediaUpload;

addFilter(
	"editor.MediaUpload",
	"core/edit-post/components/media-upload/replace-media-upload",
	replaceMediaUpload
);

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const ALLOWED_MEDIA_TYPES = ["image", "video"];
	return (
		<div className="scroller-editor">
			{!attributes.media && (
				<div className="introduction">
					<h3>Welcome to Scroller</h3>
					<p>A lightweight gallery for Wordpress.</p>
					<span>Engineered by Gio Cesaroni</span>
				</div>
			)}
			<MediaUploadCheck>
				<MediaUpload
					gallery="true"
					value={attributes.media && attributes.media.map((e) => e.id)}
					onSelect={(media) => setAttributes({ media: media })}
					multiple="add"
					allowedTypes={ALLOWED_MEDIA_TYPES}
					render={({ open }) => (
						<Button onClick={open}>
							{!attributes.media ? "Select Images" : "Edit Gallery"}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{attributes.media && attributes.media.map((e) => <img src={e.url}></img>)}
		</div>
	);
}
