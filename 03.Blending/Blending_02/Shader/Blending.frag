#version 460 core

layout (location = 0) in vec2 inTexCoords;

layout (location = 0) out vec4 outColor;

layout (binding = 0) uniform sampler2D diffuseMap;

void main()
{
	outColor = texture(diffuseMap, inTexCoords);
}