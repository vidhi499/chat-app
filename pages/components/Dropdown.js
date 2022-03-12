import { Box, HamburgerIcon, Menu, Pressable } from "native-base";
import { supabase } from "../../utils/supabaseClient";

function UserMenu() {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  return (
    <Box w="100vw" alignItems="flex-end" p="8">
      <Menu
        placement="left"
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          );
        }}
      >
        <Menu.Item onPress={signOut}>Logout</Menu.Item>
      </Menu>
    </Box>
  );
}

export default UserMenu;
