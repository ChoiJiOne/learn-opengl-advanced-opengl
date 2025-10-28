#version 460 core

layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec2 inTexCoords;

layout (location = 0) out vec2 outTexCoords;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
	outTexCoords = inTexCoords;
	gl_Position = projection * view * model * vec4(inPosition, 1.0f);
}