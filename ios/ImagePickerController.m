//
//  PhotoPickerController.m
//  PleoExpensesList
//
//  Created by Muhammad Moaz Khan on 20/10/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(ImagePicker, RCTEventEmitter)
RCT_EXTERN_METHOD(selectImage)
@end
