#version 460 core

layout (location = 0) in vec2 inTexCoords;

layout (location = 0) out vec4 outColor;

float near = 0.1f;
float far = 100.0f;

float LinearizeDepth(float depth)
{
	float z = depth * 2.0f - 1.0f;
	return (2.0f * near * far) / (far + near - z * (far - near));
}

void main()
{
	float depth = LinearizeDepth(gl_FragCoord.z) / far;
	outColor = vec4(vec3(depth), inTexCoords);
}