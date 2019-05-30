#include "macros.h"
#include "../FeatureDetector.h"

#ifndef __FF_AKAZEDETECTOR_H__
#define __FF_AKAZEDETECTOR_H__

class AKAZEDetector : public FeatureDetector {
public:
	cv::Ptr<cv::AKAZE> detector;

  static NAN_MODULE_INIT(Init); 
  static NAN_METHOD(New);

	static FF_GETTER(AKAZEDetector, GetDescriptorType, detector->getDescriptorType());
	static FF_GETTER(AKAZEDetector, GetDescriptorSize, detector->getDescriptorSize());
	static FF_GETTER(AKAZEDetector, GetDescriptorChannels, detector->getDescriptorChannels());
	static FF_GETTER(AKAZEDetector, GetThreshold, detector->getThreshold());
	static FF_GETTER(AKAZEDetector, GetNOctaves, detector->getNOctaves());
	static FF_GETTER(AKAZEDetector, GetNOctaveLayers, detector->getNOctaveLayers());
	static FF_GETTER(AKAZEDetector, GetDiffusity, detector->getDiffusivity());

  static Nan::Persistent<v8::FunctionTemplate> constructor;

	cv::Ptr<cv::FeatureDetector> getDetector() {
		return detector;
	}

	struct NewWorker : CatchCvExceptionWorker {
	public:
		int descriptorType = cv::AKAZE::DESCRIPTOR_MLDB;
		int descriptorSize = 0;
		int descriptorChannels = 3;
		double threshold = 0.001f;
		int nOctaves = 4;
		int nOctaveLayers = 4;
		int diffusivity = cv::KAZE::DIFF_PM_G2;

		bool unwrapOptionalArgs(Nan::NAN_METHOD_ARGS_TYPE info) {
			return (
				FF::IntConverter::optArg(0, &descriptorType, info) ||
				FF::IntConverter::optArg(1, &descriptorSize, info) ||
				FF::IntConverter::optArg(2, &descriptorChannels, info) ||
				FF::DoubleConverter::optArg(3, &threshold, info) ||
				FF::IntConverter::optArg(4, &nOctaves, info) ||
				FF::IntConverter::optArg(5, &nOctaveLayers, info) ||
				FF::IntConverter::optArg(6, &diffusivity, info)
				);
		}

		bool hasOptArgsObject(Nan::NAN_METHOD_ARGS_TYPE info) {
			return FF::isArgObject(info, 0);
		}

		bool unwrapOptionalArgsFromOpts(Nan::NAN_METHOD_ARGS_TYPE info) {
			v8::Local<v8::Object> opts = info[0]->ToObject(Nan::GetCurrentContext()).ToLocalChecked();
			return (
				FF::IntConverter::optProp(&descriptorType, "descriptorType", opts) ||
				FF::IntConverter::optProp(&descriptorSize, "descriptorSize", opts) ||
				FF::IntConverter::optProp(&descriptorChannels, "descriptorChannels", opts) ||
				FF::DoubleConverter::optProp(&threshold, "threshold", opts) ||
				FF::IntConverter::optProp(&nOctaves, "nOctaves", opts) ||
				FF::IntConverter::optProp(&nOctaveLayers, "nOctaveLayers", opts) ||
				FF::IntConverter::optProp(&diffusivity, "diffusivity", opts)
				);
		}

		std::string executeCatchCvExceptionWorker() {
			return "";
		}
	};
};

#endif