import { PlayStationConsoleType, PlayStationConsole } from './PlayStationConsole';

export default class PlayStation4 extends PlayStationConsole
{
	public constructor()
	{
		super(PlayStationConsoleType.PS4, '616796633052610570');
	}

	public get assetName() : string
	{
		return 'ps4_main';
	}

	public get consoleName() : string
	{
		return 'PlayStation 4';
	}
}
