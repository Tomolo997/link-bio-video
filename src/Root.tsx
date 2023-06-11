import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="LinkInBio"
				component={MyComposition}
				durationInFrames={90}
				fps={60}
				width={1280}
				height={1900}
			/>
		</>
	);
};
