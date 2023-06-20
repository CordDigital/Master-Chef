import { callServer, url } from './callServer'

export default function() {
	const getMainFeatured = async function() {
		const res = await callServer(url + 'api/v1/setting/footer')
		return { data: res.slider_images }
	}

	return { getMainFeatured }
}
