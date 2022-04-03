initSidebarItems({"constant":[["DEFAULT_MARGIN",""],["DEFAULT_TEXT_BACKGROUND",""],["DEFAULT_TEXT_FOREGROUND",""],["DEFAULT_THEME_BACKGROUND",""],["DWORD_SIZE",""],["FONT_HEIGHT",""],["FONT_WIDTH",""],["MARGIN_GRADIENT","The amount of VGA font glyphs."],["TAB_SIZE",""]],"enum":[["PixelFormat","Color format of pixels in the framebuffer."]],"fn":[["backspace",""],["clear_screen","Clears the screen and if `mv` is set to true, resets the cursor position to `0`."],["double_buffer_flush","Panics"],["force_unlock","Force-unlocks the rendy to prevent a deadlock."],["get_cursor_position","Gets the cursor position as a tuple `(x, y)`."],["get_rendy_info","Panics"],["get_resolution","Returns the terminal’s resolution in the form of a `(horizontal_resolution, vertical_resolution)` tuple."],["get_rows_cols","Returns the terminal’s rows and columns in the form of a `(rows, columns)` tuple."],["get_term_info","Returns a tuple of the amount of `(rows, columns)` in the terminal."],["init",""],["is_initialized","Return true if the terminal is initialized."],["parse_bmp_image",""],["reset_default","Resets the text foreground and background to their default values."],["set_auto_flush","Panics"],["set_cursor_position","Sets the cursor position to the provided `x` and `y` coordinates."],["set_cursor_visibility",""],["set_text_bg",""],["set_text_color",""],["set_text_fg",""]],"macro":[["dbg",""],["print",""],["println",""]],"static":[["DEBUG_RENDY",""],["FONT",""]],"struct":[["BmpHeader",""],["Character",""],["ColorCode",""],["DebugRendy",""],["Image",""],["QueueCharacter",""],["RendyInfo",""]]});