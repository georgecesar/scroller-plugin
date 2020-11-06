/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div class="scroller-wrapper">
			<div class="scroller">
				{attributes.media &&
					attributes.media.map((e) => (
						<div class="slide" style={"background-image: url(" + e.url + ")"}>
							<h1 class="caption">{e.caption}</h1>
						</div>
					))}
			</div>
			<div class="dots-container"></div>
			<div class="scroller-fullscreen">
				<div class="cover"></div>
				<i class="fas fa-times" id="close"></i>
				{attributes.media &&
					attributes.media.map((e) => (
						<div class="slide" style={"background-image: url(" + e.url + ")"}>
							<h1 class="caption">{e.caption}</h1>
						</div>
					))}
			</div>
		</div>
	);
}
