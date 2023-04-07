import { Tooltip } from "@mui/material";
import CustomAvatarGroup from "../../components/custom-avatar/CustomAvatarGroup";
import { CustomAvatar } from "../../components/custom-avatar";
import _mock from '../../_mock';


function CustomAvatarSection() {

    const SIZES = ['tiny', 'small', 'medium', 'large'] as const;

    const USERS = ['Tomi Budi', 'Tomi Budi', 'Tomi Budi', 'Tomi Budi', 'Tomi Budi', 'Tomi Budi', 'Tomi Budi', 'Tomi Budi'] as const;

    return (
        <>
            {SIZES.map((size) => (
                <Tooltip key={size} title={size}>
                    <CustomAvatarGroup key={size} size={size} max={4}>
                        {USERS.map((user, index) => (
                            <CustomAvatar
                                key={user}
                                alt="Tomi Budi"
                                src={_mock.image.avatar(index + 1)}
                            />
                        ))}
                    </CustomAvatarGroup>
                </Tooltip>
            ))}
            {SIZES.map((size) => (
                <Tooltip key={size} title={size}>
                    <CustomAvatarGroup key={size} size={size} max={4}>
                        {USERS.map((user, index) => (
                            <CustomAvatar
                                key={user}
                                alt="Tomi Budi"
                                src={''}
                                name={user}
                            />
                        ))}
                    </CustomAvatarGroup>
                </Tooltip>
            ))}
        </>
    );
}

export default CustomAvatarSection;
