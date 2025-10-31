cmake_minimum_required(VERSION 3.30.3)

add_subdirectory(Blending_01)
add_subdirectory(Blending_02)
add_subdirectory(Blending_03)

set_target_properties(
    Blending_01
    Blending_02
    Blending_03
    PROPERTIES FOLDER "03.Blending"
)