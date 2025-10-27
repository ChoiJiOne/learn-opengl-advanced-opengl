cmake_minimum_required(VERSION 3.30.3)

add_subdirectory(DepthTesting_01)
add_subdirectory(DepthTesting_02)

set_target_properties(
    DepthTesting_01
    DepthTesting_02
    PROPERTIES FOLDER "01.DepthTesting"
)