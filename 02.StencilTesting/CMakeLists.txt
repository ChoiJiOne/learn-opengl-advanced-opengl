cmake_minimum_required(VERSION 3.30.3)

add_subdirectory(StencilTesting_01)

set_target_properties(
    StencilTesting_01
    PROPERTIES FOLDER "02.StencilTesting"
)